const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add Title'],
		unique: true,
		trim: true,
		maxlength: [40, 'Title cannot exceeds mor than 40 characters'],
	},
	description: {
		type: String,
		required: true,
		maxlength: [
			200,
			'Description cannot exceeds mor than 200 characters',
		],
	},
});

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
