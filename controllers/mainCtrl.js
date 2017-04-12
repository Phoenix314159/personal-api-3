let user = require('../user');
let skillz = require('../skillz');
module.exports = {
    getName: (req, res) => {
        res.status(200).json({name: user.name});
    },
    getLocation: (req, res) => {
        res.status(200).json({location: user.location});
    },
    getOccupations: (req, res) => {
        if (req.query.order) {
            let v = req.query.order;
            if (v === 'asc') {
                let arr = user.occupations.sort();
                res.status(200).json({occupations: arr});
            } else if (v === 'desc') {
                console.log('running desc');
                res.status(200).json({occupations: user.occupations.sort().reverse()});
            }
        }
        else {
            res.status(200).json({occupations: user.occupations});
        }
    },
    getLatestOccupation: (req, res) => {
        res.status(200).json({'latest occupation': user.occupations[user.occupations.length - 1]});
    },
    getHobbies: (req, res) => { /* */
        if (req.params.type) {
            let arr = [];
            for (let i = 0; i < user.hobbies.length; i++) {
                if (req.params.type === user.hobbies[i].type) {
                    arr.push(user.hobbies[i]);
                }
            }
            res.status(200).json({hobbies: arr});
        } else {
            res.status(200).json({hobbies: user.hobbies});
        }
    },
    getFamily: (req, res) => {

        res.status(200).json(user.family);
    },
    getFamilyByGender: (req, res) => {
        let arr = [];
        let arr2 = [];
        if (req.params.gender === 'male') {
            console.log(req.params.gender)
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
    getRestaurants: (req, res) => {   /* */
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
    },
    updateName: (req, res) => {
        user.name = req.body.name;
        res.status(200).json(user.name);
    },
    updateLocation: (req, res) => {
        user.location = req.body.location;
        res.status(200).json(user.location);
    },
    addHobbie: (req, res) => {
        user.hobbies.push({name: req.body.name, type: req.body.type});
        res.status(200).json(user.hobbies);
    },
    addOccupation: (req, res) => {
        user.occupations.push(req.body);
        res.status(200).json(user.occupations);

    },
    deleteLastOccupation: (req, res) => {
        res.status(200).json(user.occupations.pop());
    },
    addFamilyMember: (req, res) => {
        user.family.push(req.body);
        res.status(200).json(user.family);
    },
    addRestaurant: (req, res) => {
        user.restaurants.push(req.body);
        res.status(200).json({
            name: user.restaurants.name,
            type: user.restaurants.type,
            rating: user.restaurants.rating
        });
    },
    deleteRestaurantByRating: function (req, res) {
        console.log(typeof req.params.rating);
        for (let i = 0; i < user.restaurants.length; i++) {
            if (req.params.rating == user.restaurants[i].rating) {
                console.log('runnings');
                user.restaurants.splice(i, 1);
                console.log(user.restaurants);
            }
        }
        res.status(200).json(user.restaurants);
    },
    getSkillz: function (req, res) {
        if (req.query.experience) {
            let x = req.query;
            let arr = skillz.filter(a => {
                if (x.experience === a.experience) {
                    return true;
                }
            });
            res.status(200).json(arr);
        }else {
            res.status(200).json(skillz);
        }
    },
    addSkill: function (req, res) {
        let v = skillz[skillz.length -1].id + 1
        res.status(200).json(skillz.push({v:req.id, name:req.name, experience: req.experience}));
    }
}