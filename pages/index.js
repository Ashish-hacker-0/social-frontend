import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {AiOutlinePlus,AiOutlineLike} from 'react-icons/ai';
import {CgHome,CgProfile} from 'react-icons/cg';
import {BsCardImage, BsCalendarFill,BsFillPeopleFill,BsFillImageFill} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {MdCancel} from 'react-icons/md';
import {FaThumbsUp} from 'react-icons/fa';
import {BiCommentDots,BiChevronRight} from 'react-icons/bi';
import { useState } from 'react';
export default function Home() {
  const [usrc,setUsrc] = useState('')
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.profile}>
          <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
          <div>
            <p>Ashish Kumar</p>
            <p>@ashishkumar</p>
          </div>
        </div>
        <div className={styles.menu}>
           <ul>
             <li> <CgHome/> Home </li>
             <li> <BsFillPeopleFill/> People </li>
             <li> <BsCardImage/> Photos  </li>
             <li className={styles.active}> <BsCalendarFill/> News Feed </li>
             <li> <CgProfile/> Profile </li>
             <li> <FiSettings/> Setting </li>
           </ul>
        </div>
        <div className={styles.invite}>
            <p>INVITATIONS</p> <p>2</p>
        </div>
        <div className={styles.invites}>
        <div className={styles.invitation}>
          <div>
          <p>How to build a strong company</p>
          </div>
          <button>Accept Invitation</button> <button> <MdCancel/> </button>
        </div>
        </div>
      </div>
      <div className={styles.mid}>
         <div className={styles.status}>
           <div className={styles.addStatus}>
              <button><AiOutlinePlus/></button>
              <p>Add Story</p>
           </div>
           <div className={styles.statusContainer}>
           <div className={styles.scroller}>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              <div className={styles.fstatus}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p>Ashish Kumar</p>
              </div>
              </div>
           </div>
         </div>
         <div className={styles.newpost}>
            <div className={styles.create}>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg" />
                <input placeholder="What's new, Ashish?" />
                <BsFillImageFill/>
                <button>Post It!</button>
            </div>
            {usrc!=''&&<div className={styles.uimage}>
                <img src={usrc}/>
            </div>}
         </div>
         <div className={styles.posts}>
           <div className={styles.post}>
              <div>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> 
                <div>
                  <p>Ashish Kumar</p>
                  <p>10 hours ago</p>
                </div>
              </div>
              <p className={styles.detail}>
                Nature Photography
              </p>
              <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/>
              </div>
              <div className={styles.like}>
                <div>
                  <AiOutlineLike/> Like
                </div>
                <div>
                   <BiCommentDots/> Comment
                </div>
              </div>
           </div>
           <div className={styles.post}>
              <div>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> 
                <div>
                  <p>Ashish Kumar</p>
                  <p>10 hours ago</p>
                </div>
              </div>
              <p className={styles.detail}>
                Nature Photography
              </p>
              <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/>
              </div>
              <div className={styles.like}>
                <div>
                  <AiOutlineLike/> Like
                </div>
                <div>
                   <BiCommentDots/> Comment
                </div>
              </div>
           </div>
           <div className={styles.post}>
              <div>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> 
                <div>
                  <p>Ashish Kumar</p>
                  <p>10 hours ago</p>
                </div>
              </div>
              <p className={styles.detail}>
                Nature Photography
              </p>
              <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/>
              </div>
              <div className={styles.like}>
                <div>
                  <AiOutlineLike/> Like
                </div>
                <div>
                   <BiCommentDots/> Comment
                </div>
              </div>
           </div>
           <div className={styles.post}>
              <div>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> 
                <div>
                  <p>Ashish Kumar</p>
                  <p>10 hours ago</p>
                </div>
              </div>
              <p className={styles.detail}>
                Nature Photography
              </p>
              <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/>
              </div>
              <div className={styles.like}>
                <div>
                  <AiOutlineLike/> Like
                </div>
                <div>
                   <BiCommentDots/> Comment
                </div>
              </div>
           </div>
           <div className={styles.post}>
              <div>
                <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> 
                <div>
                  <p>Ashish Kumar</p>
                  <p>10 hours ago</p>
                </div>
              </div>
              <p className={styles.detail}>
                Nature Photography
              </p>
              <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/>
              </div>
              <div className={styles.like}>
                <div>
                  <AiOutlineLike/> Like
                </div>
                <div>
                   <BiCommentDots/> Comment
                </div>
              </div>
           </div>
         </div>
      </div>
      <div className={styles.right}>
         <div className={styles.requests}>
            <div className={styles.requestheader}>
               <p>REQUESTS</p> <button><BiChevronRight/></button>
            </div>
            <div className={styles.request}>
               <div>
                 <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p> <span className={styles.bold}>Ashish Kumar</span> wants to add you to friends</p>
               </div>
               <div>
               <button>Accept</button> <button>Decline</button>
               </div>
            </div>
            <div className={styles.request}>
               <div>
                 <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                <p> <span className={styles.bold}>Ashish Kumar</span> wants to add you to friends</p>
               </div>
               <div>
               <button>Accept</button> <button>Decline</button>
               </div>
            </div>
         </div>
         <div className={styles.friends}>
             <div className={styles.friendsHeader}>
                <p>FRIENDS</p><button>34</button>
             </div>
             <div className={styles.friendsContainer}>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
                 <div className={styles.friend}>
                    <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/> <p>Ashish Kumar</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  )
}
