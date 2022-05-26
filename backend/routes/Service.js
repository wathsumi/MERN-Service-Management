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
    const Price = req.body.Price;
    const NumberOfPeople = req.body.NumberOfPeople;
   

    const newService  = new Service({
        ServiceID,
        ServiceName,
        PackageType,
        Price,
        NumberOfPeople,
       
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
            Service.Price = req.body.Price;
            Service.NumberOfPeople = req.body.NumberOfPeople;
            
          

            Service.save()
                .then(() => res.json('Service updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

