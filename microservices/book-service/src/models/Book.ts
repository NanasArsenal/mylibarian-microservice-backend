import mongoose,{Schema,model} from "mongoose";

const Book = new Schema({
  title:{
    type:String,
    require:true
  },
  fileUrl: {
    type:String,
    require: true
  }
})

export default model('Book', Book);