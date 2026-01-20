const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
    {
        
        // add other details

    }, {
    timestamps: true,
}
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;