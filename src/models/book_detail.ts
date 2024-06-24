import mongoose from "mongoose";

const BookDeatilSchema = new mongoose.Schema({
  title: String,
  authors: { type: [String], required: false },
  additionalInfo: { type: mongoose.Schema.Types.Mixed, required: false },
  updated_at: { type: Date, default: Date.now },
});

const BookDetail = mongoose.model("BookDetail", BookDeatilSchema);

export default BookDetail;

