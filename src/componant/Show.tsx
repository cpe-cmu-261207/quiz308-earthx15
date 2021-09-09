import { comments } from "../data/comments"
import Ments from "./Ments"
const Show = ()=>{
    return(
        <div>
            {comments.map(x=> <Ments name={x.username} imagepath={x.userImagePath} text={x.commentText} like={x.likeNum}></Ments> )}

        </div>
        
    )

}

export default Show