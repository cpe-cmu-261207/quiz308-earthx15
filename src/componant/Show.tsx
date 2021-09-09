import { comments,CommentType } from "../data/comments"
import Ments from "./Ments"
const Show = ()=>{
    return(
        <div>
            {comments.map(x=> <Ments username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}></Ments> )}

        </div>
        
    )

}

export default Show