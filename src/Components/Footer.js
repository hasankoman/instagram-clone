export default function Footer({ type }) {
  return (
    <footer className="flex text-instagram-text flex-col text-xs gap-5 justify-center items-center flex-wrap  mb-12">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <a href="#!">Meta</a>
        <a href="#!">About</a>
        <a href="#!">Blog</a>
        <a href="#!">Jobs</a>
        <a href="#!">Help</a>
        <a href="#!">API</a>
        <a href="#!">Privacy</a>
        <a href="#!">Terms</a>
        <a href="#!">Top accounts</a>
        <a href="#!">Hashtags</a>
        <a href="#!">Locations</a>
        <a href="#!">Instagram Lite</a>
        <a href="#!">Contact uploading and non-users</a>
        {type === "main" ? (
          <>
            <a href="#!">Dance</a>
            <a href="#!">Food & Drink</a>
            <a href="#!">Home & Garden</a>
            <a href="#!">Music</a>
            <a href="#!">Visual Arts</a>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="flex gap-4">
        <select
          name=""
          id=""
          className="focus:outline-none inline-block cursor-pointer bg-transparent"
        >
          <option value="1">English</option>
          <option value="2">Türkçe</option>
          <option value="3">Dansk</option>
          <option value="4">Ne</option>
          <option value="5">Polski</option>
        </select>
        <span>© 2022 Instagram from Meta</span>
      </div>
    </footer>
  );
}

{
  /* <Story
                                  key={index}
                                  username={followUser.username}
                                  profilePhoto={followUser.profilePhoto}
                                /> */
}
