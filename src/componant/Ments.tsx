import { CommentType } from "../data/comments"


const Ments = ({ username, userImagePath, commentText,likeNum,replies }: CommentType)=>{
    return(
        <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{username}</p>
              <p className='text-white'>{commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{likeNum}</p>
              </div>
            </div>
          </div>
        
    )

}

export default Ments