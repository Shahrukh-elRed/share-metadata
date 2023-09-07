import Image from "next/image"

const Profile = () => {
  return (
    <>
      <div className="parent-profile">
        <div className="profile-header">Profile</div>
        <div className="profile-details">
            <Image src="/profile.png" width="60" height="60" alt="" />
            <div className="profile-name">Alexander Stanton</div>
            <div className="profile-profession">Realtor | VP Design</div>
            <div className="profile-location">Bangalore, India</div>
        </div>
        <div className="share">Share</div>
      </div>
    </>
  )
}

export default Profile