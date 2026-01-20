const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema(
    {
        
        // add other details

    }, {
    timestamps: true,
}
);

const DailyLog = mongoose.model("DailyLog", dailyLogSchema);

module.exports = DailyLog;