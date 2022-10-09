import { Icon } from "Components/Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "Store/modalStore";
import Story from "./Story";

export default function Post({ post, acc }) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex my-3 border border-gray-200 rounded-lg bg-white flex-col overflow-hidden">
      <div className="rounded-lg border-b flex items-center justify-between w-full py-1">
        <div className="flex items-center gap-2 ml-2 my-2 mr-1 w-full ">
          <Story
            type={"post"}
            profilePhoto={acc.profilePhoto}
            uid={acc.uid}
            username={acc.username}
          />

          <a href="#!" className="text-sm font-medium ">
            <span>{acc.username}</span>
          </a>
        </div>
        <div className="pr-1 text-[#262626] ">
          <button
            className="p-2"
            onClick={() => dispatch(openModal("postSettings"))}
          >
            <div>
              <Icon name="tripleDot" className=" flex" />
            </div>
          </button>
        </div>
      </div>

      <div className="card-body">
        <img src={post.contentImgUrl} alt="" className="w-full object-cover" />
      </div>
      <div className="flex px-3 pb-[6px] mt-1">
        <div>
          <Icon name="like" type={""} />
        </div>
        <div>
          <Icon name="comment" />
        </div>
        <div>
          <Icon name="share" />
        </div>
        <div className="ml-auto flex items-center justify-center">
          <Icon name="saved" type={""} />
        </div>
      </div>
      <div className="card-info  ">
        <div className="flex flex-col text-sm font-medium gap-1 px-3">
          <a href="#!">
            <span className="">{post.likes.length} likes</span>
          </a>
          <a href="#!">
            <span className="flex">
              {acc.username}
              <p className="font-normal ml-1">{post.description}</p>
            </span>
          </a>

          <div className="text-instagram-text font-normal">
            <a href="#!">
              {post.comments.length !== 0 ? (
                <span> View all {post.comments.length} comments</span>
              ) : (
                ""
              )}
            </a>
          </div>
          <div className="text-[10px] text-instagram-text font-light mb-2">
            <a href="#!">
              <time
                className="tracking-wide uppercase"
                datetime="2022-09-23T17:31:30.000Z"
                title="Sep 23, 2022"
              >
                2 hours ago
              </time>
            </a>
          </div>
        </div>
        <div className="border-t border-gray py-1 pr-4 pl-3">
          <form action="">
            <div className="flex items-center ">
              <button className="py-2 pr-3 active:opacity-100">
                <Icon name="emoji" />
              </button>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add a comment..."
                className="resize-none leading-[18px] text-[14px] focus:outline-none flex-1 h-5 max-h-20"
              ></textarea>
              <button
                className="text-[#0095f6] font-medium disabled:opacity-30"
                disabled={comment.length > 0 ? false : true}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
