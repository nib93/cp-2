

const trailSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    featured: {
      type: Boolean,
      default:false
    },
    comments: [commentSchema]
  }, {
    timestamps: true
  });