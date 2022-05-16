//Initialize object that will have the operation functions.
operation = {};
//Basic getAll
operation.toGetAll = function (schema) {
	return (req, res) => {
		// our null can be used a a security params
		schema.find(null, (err, data) => {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send(data);
			}
		});
	}
}

// Get one specific Item in the database
operation.toGet = function (schema) {
	return async (req, res) => {
		schema.findById(req.params.id, function (err, docs) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				if (docs === null) {
					res.status(200).send("No such Item")
				}
				else {
					res.status(200).json(docs)
				}
			}
		});
	}
}

// Create an object in the database
operation.toCreate = function (schema) {
	return async (req, res) => {
		const userInfo = req.body;
		schema.create(userInfo, null, (err, data) => {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send(data);
			}
		})
	}
}

//Update one specific item in the database
operation.toUpdate = function (schema) {
	return async (req, res) => {
		const id = req.params.id;
		// we have a log in updating items
		schema.findByIdAndUpdate(req.params.id, req.body, function (err, docs) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.status(200).json(docs)
				console.log("Updated: ", docs);
			}
		});
	}
}

// Delete a specifc Item in the database
operation.toDelete = function (schema) {
	return async (req, res) => {
		schema.findByIdAndDelete(req.params.id, function (err, docs) {
			if (err) {
				res.status(400).send("You have error")
				console.log(err)
			}
			else {
				if (docs === null) {
					res.status(200).send("Already Deleted")
				}
				else {
					res.status(200).send(docs)
					console.log("Deleted : ", docs);
				}
			}
		});
	}
}

module.exports = operation;