import { Link } from "react-router-dom";
import { Stories } from "Helpers/DataBase/Stories";
import { Seen } from "Helpers/DataBase/Seen";
import { useEffect, useState } from "react";

export default function Story({
  username,
  profilePhoto,
  uid,
  type,
  currentUid,
}) {
  const [lastStory, setLastStory] = useState({});
  const [storySeen, setStorySeen] = useState(false);
  const getStory = () => {
    for (let story of Stories) {
      if (story.uid === uid) {
        const index = story.stories.length;
        setLastStory(story.stories[index - 1]);
      }
    }
  };
  const getStorySeen = () => {
    for (let s of Seen) {
      console.log(s);
      console.log(currentUid);
      if (s.uid === currentUid) {
        setStorySeen(s.seen.includes(lastStory.storyId));
      }
    }
  };
  useEffect(() => {
    getStory();
    getStorySeen();
  }, []);
  return (
    <div className="rounded-full">
      <Link
        to={`stories/${username}/${lastStory.storyId}`}
        className="active:opacity-100 group"
      >
        <div
          className={`flex flex-col items-center ${
            type === "main" ? "gap-1 py-1" : ""
          }`}
        >
          <div className={`relative`}>
            <div
              className={`m-[2px] rounded-full ${
                storySeen ? "border-none-gradient" : "border-gradient"
              }`}
            >
              <div className=" border-white rounded-full border-[2px]">
                <figure className="">
                  <img
                    className={` rounded-full ${
                      type === "main" ? "h-14 w-14" : "h-8 w-8"
                    }`}
                    src={profilePhoto}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>

          {type === "main" ? (
            <span className="text-ellipsis whitespace-nowrap overflow-hidden text-xs max-w-[74px]">
              {username}
            </span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
}

// {/* userlar?? ald??k */}
// {Users.map((user, index) => {
//   {
//     /* aktif user?? ald??k */
//   }
//   if (user.uid === uid) {
//     {
//       /* user followlar??n?? ald??k */
//     }
//     Following.map((fAcc) => {
//       {
//         /* aktif user??n objesini ald??k */
//       }
//       if (fAcc.uid === uid) {
//         console.log(fAcc.following);
//         {
//           /* aktif user??n takip ettiklerini ald??k */
//         }
//         fAcc.following.map((followUid) => {
//           console.log(followUid);
//           {
//             /* storileri ald??k */
//           }
//           Stories.map((sAcc) => {
//             {
//               /* aktif user??n takip ettiklerinin storilerini ald??k */
//             }
//             if (sAcc.uid === followUid) {
//               console.log(sAcc);
//               {
//                 /* userlar?? ald??k */
//               }
//               Users.map((followUser) => {
//                 console.log(followUid);
//                 {
//                   /* aktif user??n takip ettiklerinin objesini ald??k */
//                 }
//                 if (followUser.uid === followUid) {
//                   console.log(followUser.uid);
//                   <Footer />;
//                 } else console.log("Xs");
//               });
//             } else {
//               return;
//             }
//           });
//         });
//       } else {
//         return;
//       }
//     });
//   } else {
//     console.log("xd");
//     return;
//   }
// })}
