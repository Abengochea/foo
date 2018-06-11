Admin = require('../models/').Admin;
User = require('../models/').User;


module.exports = {
	index(req, res){
		Admin.findAll({
			// return the books associated with each author
			include: User
		}).then(function(admins){
			sendResult(res, admins);
		}).catch(function(error){
			sendError(res, error);
		});
	},
	show(req, res){
		Admin.findById(req.params.id, {
			// return all books for author
			include: User
		}).then(function(admin){
			sendResult(res, admin);
		}).catch(function(error){
			sendError(res, error);
		});
	},
	create(req, res){
		Admin.create(req.body)
			.then(function(newAdmin){
				sendResult(res, newAdmin);
			})
			.catch(function(error){
				sendError(res, error);
			});
	},
	update(req, res){
		Admin.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function(updatedAdmin){
			sendResult(res, updatedAdmin);
		})
		.catch(function(err){
			sendError(res, err);
		});
	},
	delete(req, res){
		Admin.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedRecord){
			sendResult(res, deletedRecord);
		})
		.catch(function(err){
			sendError(res, err);
		});
	}
}

// helper functions
function sendResult(res, result){
	res.status(200).json(result);
}

function sendError(res, result){
	res.status(500).json(result);
}
