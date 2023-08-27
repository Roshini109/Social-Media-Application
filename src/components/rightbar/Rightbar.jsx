import './rightbar.css'

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/icons/bd2.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 others </b> 
          have birthdays today! </span>
        </div>
        <img src="/assets/adv/a4.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/p5.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUseraName">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
