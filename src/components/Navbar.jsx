import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { PiPencilSimpleLight } from "react-icons/pi";
import { BsTicket } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { GiBookshelf } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaRegNoteSticky } from "react-icons/fa6";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { LuUserCheck } from "react-icons/lu";
import { LuFileSymlink } from "react-icons/lu";
import { AiOutlineBank } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { MdApproval } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BiZoomIn } from "react-icons/bi";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1.5px solid grey;
  border-radius: 7px;
  width: 320px;

  .logout {
    color: red;
    &:hover {
      border-left: 3px solid red;
      padding-left: 26px;
    }
  }
`;

const NavHeader = styled.h1`
  font-size: 23px;
  padding: 24px;

  color: #4367b0;
`;

const Profile = styled.div`
  display: flex;
  background-color: #f5f5f5;
  margin: 24px 24px 15px 24px;
  border-radius: 10px;
  border: 2px solid #bfbfbf;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  margin: 19px 12px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Info = styled.p`
  font-size: 14px;
`;

const Online = styled.p`
  font-size: 11px;
  color: #36c236;
`;

const NavTitle = styled.div`
  margin: 8px auto 10px auto;
  font-weight: bold;
`;

const NavItem = styled.div`
  display: flex;
  margin: 7px 0px;
  padding-left: 1.5rem;
  color: grey;
  border: 3px solid white;
  :first-child {
    font-size: 24px;
  }
  &:hover {
    border-left: 3px solid grey;
  }

  &:focus {
    background: grey;
  }
`;

const NavItemTitle = styled.p`
  margin-left: 11px;
  font-size: 14px;
  padding-top: 3px;
`;

function Navbar() {
  return (
    <Nav>
      <NavHeader>Course app</NavHeader>
      <Profile>
        <ProfileImg src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <ProfileInfo>
          <Info>Student</Info>
          <Info>9919696764</Info>
          <Online>Online</Online>
        </ProfileInfo>
      </Profile>
      <NavTitle>Student</NavTitle>
      <NavItem>
        <RxDashboard />
        <NavItemTitle>Dashboard</NavItemTitle>
      </NavItem>
      <NavItem>
        <IoBookOutline />
        <NavItemTitle>Courses</NavItemTitle>
      </NavItem>
      <NavItem>
        <PiPencilSimpleLight />
        <NavItemTitle>Homework</NavItemTitle>
      </NavItem>
      <NavItem>
        <BsTicket />
        <NavItemTitle>CRM Help Ticket</NavItemTitle>
      </NavItem>
      <NavItem>
        <FiMessageSquare />
        <NavItemTitle>CRM Messages</NavItemTitle>
      </NavItem>
      <NavItem className="logout">
        <MdLogout />
        <NavItemTitle>Logout</NavItemTitle>
      </NavItem>

      <NavTitle>Superadmin</NavTitle>
      <NavItem>
        <RxDashboard />
        <NavItemTitle>Dashboard</NavItemTitle>
      </NavItem>
      <NavItem>
        <IoBookOutline />
        <NavItemTitle>Courses</NavItemTitle>
      </NavItem>
      <NavItem>
        <HiOutlineUserGroup />
        <NavItemTitle>Batch</NavItemTitle>
      </NavItem>
      <NavItem>
        <PiStudent />
        <NavItemTitle>Student Batch</NavItemTitle>
      </NavItem>
      <NavItem>
        <GiBookshelf />
        <NavItemTitle>Upcoming BCI Courses</NavItemTitle>
      </NavItem>
      <NavItem>
        <SlCalender />
        <NavItemTitle>BCI Calendar</NavItemTitle>
      </NavItem>
      <NavItem>
        <FaRegNoteSticky />
        <NavItemTitle>Technical Notes</NavItemTitle>
      </NavItem>
      <NavItem>
        <TbFileInvoice />
        <NavItemTitle>Student Bulk Invoice</NavItemTitle>
      </NavItem>
      <NavItem>
        <MdOutlinePayment />
        <NavItemTitle>Student Payment Info</NavItemTitle>
      </NavItem>
      <NavItem>
        <MdOutlinePayments />
        <NavItemTitle>Payment Overdue List</NavItemTitle>
      </NavItem>
      <NavItem>
        <MdApproval />
        <NavItemTitle>Replace approval Request</NavItemTitle>
      </NavItem>
      <NavItem>
        <MdOutlineVideocam />
        <NavItemTitle>Video Stream Approval</NavItemTitle>
      </NavItem>
      <NavItem>
        <MdOutlinePhotoCamera />
        <NavItemTitle>Partial Payment Approval</NavItemTitle>
      </NavItem>
      <NavItem>
        <IoPersonAddOutline />
        <NavItemTitle>Access Approval Request</NavItemTitle>
      </NavItem>
      <NavItem>
        <LuFileSymlink />
        <NavItemTitle>Nature Of Your Request</NavItemTitle>
      </NavItem>
      <NavItem>
        <AiOutlineBank />
        <NavItemTitle>Bank Details</NavItemTitle>
      </NavItem>
      <NavItem>
        <FiPenTool />
        <NavItemTitle>Registration</NavItemTitle>
      </NavItem>
      <NavItem>
        <LuUserCheck />
        <NavItemTitle>Add User</NavItemTitle>
      </NavItem>
      <NavItem>
        <FaListUl />
        <NavItemTitle>All User List</NavItemTitle>
      </NavItem>
      <NavItem>
        <IoMailUnreadOutline />
        <NavItemTitle>Mail Notification Configure</NavItemTitle>
      </NavItem>
      <NavItem>
        <BsTicket />
        <NavItemTitle>CRM Help Ticket</NavItemTitle>
      </NavItem>
      <NavItem>
        <BiZoomIn />
        <NavItemTitle>Zoom Configuration</NavItemTitle>
      </NavItem>
      <NavItem className="logout">
        <MdLogout />
        <NavItemTitle>Logout</NavItemTitle>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
