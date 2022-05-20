const router = require('express').Router();
let Service  = require('../models/Service.model');

router.route('/').get((req, res) => {
    Service.find()
        .then(Service => res.json(Service))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const ServiceID = req.body.ServiceID;
    const ServiceName = req.body.ServiceName;
    const PackageType =req.body.PackageType;
    const Email = req.body.Email;
    const PostalCode = req.body.PostalCode;
    const Description = req.body.Description;
    const Materials = req.body.Materials;
   

    const newService  = new Service({
        ServiceID,
        ServiceName,
        PackageType,
        Email,
        PostalCode,
        Description,
        Materials
       
    });

    newService.save()
        .then(() => res.json('Service  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Data 
router.route('/:id').get((req, res) => {
    Service.findById(req.params.id)
        .then(Service => res.json(Service))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Service.findByIdAndDelete(req.params.id)
        .then(() => res.json('Service deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Service.findById(req.params.id)
        .then(Service => {
            Service.ServiceID = req.body.ServiceID;
            Service.ServiceName = req.body.ServiceName;
            Service.PackageType = req.body.PackageType;
            Service.PostalCode = req.body.PostalCode;
            Service.Email = req.body.Email;
            Service.Description = req.body.Description;
            Service.Materials = req.body.Materials;
            
          

            Service.save()
                .then(() => res.json('Service updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;



