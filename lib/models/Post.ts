import mongoose from "mongoose"

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    imageUrl: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema)
