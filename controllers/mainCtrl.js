let user = require('../user');
module.exports = {
    getName: function (req, res) {
        res.status(200).json({name: user.name});
    },
    getLocation: function (req, res) {
        res.status(200).json({location: user.location});
    },
    getOccupations: function (req, res) {
        if (req.query.order) {
            let v = req.query.order;
            if (v === 'asc') {
                let arr = user.occupations.sort((a, b) => {
                    return a - b
                });
                res.status(200).json({occupations: arr});
            } else if (v === 'desc') {
                res.status(200).json({occupations: user.occupations.reverse()});
            }
        }
        else {
            res.status(200).json({occupations: user.occupations});
        }
    },
    getHobbies: function (req, res) {
        res.status(200).json({hobbies: user.hobbies});
    },
    getHobbiesByType: function (req, res) {
        let arr = [];
        for (let i = 0; i < user.hobbies.length; i++) {
            if (req.params.type === user.hobbies[i].type) {
                arr.push(user.hobbies[i]);
            }
        }
        res.status(200).json({hobbies: arr});
    },
    getFamily: function (req, res) {
        res.status(200).json(user.family);
    },
    getFamilyByGender: function (req, res) {
        let arr = [];
        let arr2 = [];
        if (req.params.gender === 'male') {
            for (let i = 0; i < user.family.length; i++) {
                if (req.params.gender === user.family[i].gender) {
                    arr.push(user.family[i]);
                }
            }
            res.status(200).json({males: arr})
        } else if (req.params.gender === 'female') {
            for (let i = 0; i < user.family.length; i++) {
                if (req.params.gender === user.family[i].gender) {
                    arr2.push(user.family[i]);
                }
            }
            res.status(200).json({females: arr2});
        }
    },
    getRestaurants: function (req, res) {
        if (req.query.rating >= 2) {
            let arr = [];
            for (let i = 0; i < user.restaurants.length; i++) {
                if (user.restaurants[i].rating >= 2) {
                    arr.push(user.restaurants[i]);
                }
                res.status(200).json({restaurants: arr});
            }
        } else if (req.params.name) {
            let arr = [];
            for (let i = 0; i < user.restaurants.length; i++) {
                if (req.params.name === user.restaurants[i].name) {
                    arr.push(user.restaurants[i])
                }
            }
            res.status(200).json({restaurants: arr});
        } else {
            res.status(200).json({restaurants: user.restaurants});

        }
    }
}