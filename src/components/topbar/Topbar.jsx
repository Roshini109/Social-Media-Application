import './topbar.css';
import {Search,Person,Chat,Notifications} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">RoseSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
            <Search className="SearchIcon"/>
            <input placeholder="Search here" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <img src="/assets/person/p1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
