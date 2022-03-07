import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuList = ({ children, list, job, icon, path }) => {
  const url = useLocation();
  let urlPath = `/main/${path}`;

  return (
    <List>
      <NavLink
        depart={job}
        icon={icon}
        className={({ isActive }) => {
          return isActive ? "list selected" : "list";
        }}
        to={urlPath}
      >
        <div className="icon">
          {list === "mypage" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2286 19.6541C22.4604 18.1732 23.3172 16.4177 23.7264 14.536C24.1356 12.6543 24.0852 10.7018 23.5794 8.84364C23.0737 6.98551 22.1275 5.27643 20.8209 3.86096C19.5142 2.4455 17.8857 1.36529 16.0729 0.711731C14.2601 0.0581692 12.3164 -0.149525 10.4063 0.10622C8.49614 0.361964 6.67576 1.07362 5.09911 2.18099C3.52247 3.28836 2.23595 4.75887 1.34839 6.46811C0.460819 8.17735 -0.00168342 10.075 4.60413e-06 12.0007C0.000652359 14.8 0.98792 17.5096 2.78857 19.6541L2.77141 19.6687C2.83146 19.7407 2.90008 19.8024 2.96183 19.8735C3.03903 19.9618 3.12223 20.0449 3.20201 20.1307C3.44218 20.3912 3.68921 20.6415 3.94825 20.8763C4.02717 20.9483 4.10865 21.0151 4.18842 21.0837C4.46291 21.3202 4.74511 21.5448 5.0376 21.7539C5.07534 21.7796 5.10965 21.813 5.1474 21.8396V21.8293C7.15635 23.2419 9.55292 24 12.0094 24C14.466 24 16.8625 23.2419 18.8715 21.8293V21.8396C18.9092 21.813 18.9427 21.7796 18.9813 21.7539C19.2729 21.5439 19.556 21.3202 19.8305 21.0837C19.9102 21.0151 19.9917 20.9474 20.0706 20.8763C20.3297 20.6406 20.5767 20.3912 20.8169 20.1307C20.8966 20.0449 20.979 19.9618 21.057 19.8735C21.1179 19.8024 21.1874 19.7407 21.2475 19.6678L21.2286 19.6541ZM12.0086 5.14424C12.772 5.14424 13.5183 5.37044 14.153 5.79422C14.7878 6.218 15.2825 6.82034 15.5747 7.52507C15.8668 8.2298 15.9433 9.00526 15.7943 9.75339C15.6454 10.5015 15.2778 11.1887 14.7379 11.7281C14.1981 12.2675 13.5104 12.6348 12.7616 12.7836C12.0129 12.9324 11.2368 12.856 10.5315 12.5641C9.82616 12.2722 9.22332 11.7779 8.79919 11.1437C8.37506 10.5094 8.14868 9.76377 8.14868 9.00098C8.14868 7.97811 8.55535 6.99713 9.27922 6.27386C10.0031 5.55058 10.9849 5.14424 12.0086 5.14424ZM5.15254 19.6541C5.16742 18.5288 5.62512 17.4546 6.42662 16.6638C7.22811 15.8731 8.30896 15.4294 9.43532 15.4289H14.5818C15.7082 15.4294 16.7891 15.8731 17.5905 16.6638C18.392 17.4546 18.8497 18.5288 18.8646 19.6541C16.9834 21.348 14.5409 22.2853 12.0086 22.2853C9.47627 22.2853 7.03374 21.348 5.15254 19.6541Z"
                fill="white"
              />
            </svg>
          ) : list === "notice" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.24995 9.75C5.24995 7.95979 5.96111 6.2429 7.22698 4.97703C8.49285 3.71116 10.2097 3 11.9999 3C13.7902 3 15.507 3.71116 16.7729 4.97703C18.0388 6.2429 18.7499 7.95979 18.7499 9.75V12.606L20.1959 16.221C20.2416 16.3348 20.2586 16.458 20.2455 16.5799C20.2324 16.7018 20.1897 16.8187 20.121 16.9202C20.0523 17.0217 19.9598 17.1049 19.8515 17.1624C19.7433 17.2199 19.6225 17.25 19.4999 17.25H4.49995C4.37736 17.25 4.25664 17.2199 4.14837 17.1624C4.0401 17.1049 3.94757 17.0217 3.87889 16.9202C3.8102 16.8187 3.76746 16.7018 3.75439 16.5799C3.74133 16.458 3.75834 16.3348 3.80395 16.221L5.24995 12.606V9.75ZM9.09295 18.75C9.25814 19.395 9.63372 19.9665 10.1602 20.374C10.6868 20.7815 11.3341 21.0018 11.9999 21C13.4039 21 14.5754 20.0475 14.9069 18.75H9.09295Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4 1.2H18C17.6818 1.2 17.3765 1.32643 17.1515 1.55147C16.9265 1.77651 16.8 2.08174 16.8 2.4V22.7904H21.6V2.4C21.6 2.08174 21.4736 1.77651 21.2486 1.55147C21.0235 1.32643 20.7183 1.2 20.4 1.2ZM13.2 8.4H10.8C10.4818 8.4 10.1765 8.52643 9.9515 8.75147C9.72645 8.97651 9.60002 9.28174 9.60002 9.6V22.7904H14.4V9.6C14.4 9.28174 14.2736 8.97651 14.0486 8.75147C13.8235 8.52643 13.5183 8.4 13.2 8.4ZM6.00002 15.6H3.60002C3.28176 15.6 2.97654 15.7264 2.7515 15.9515C2.52645 16.1765 2.40002 16.4817 2.40002 16.8V22.7904H7.20002V16.8C7.20002 16.4817 7.0736 16.1765 6.84855 15.9515C6.62351 15.7264 6.31828 15.6 6.00002 15.6Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        {children}
      </NavLink>
      <NavList></NavList>
    </List>
  );
};

const List = styled.div`
  position: relative;
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${(20 / 1512) * 100 + "vw"};
    color: #ffffffc8;
    height: ${(61 / 1512) * 100 + "vw"};
    font-weight: 600;
    font-size: ${(14 / 1512) * 100 + "vw"};
    line-height: ${(30 / 1512) * 100 + "vw"};
    cursor: pointer;
    .icon {
      padding-top: ${(8 / 1512) * 100 + "vw"};
      width: ${(30 / 1512) * 100 + "vw"};
      margin-right: ${(10 / 1512) * 100 + "vw"};
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    &:hover {
      color: ${props => {
        if (props.children[0].props.depart === "police") {
          return "#1482ef";
        } else if (props.children[0].props.depart === "fire") {
          return "#F48065";
        } else if (props.children[0].props.depart === "admin") {
          return "#13C383";
        }
      }};
      background-color: #fff;
      div {
        svg {
          path {
            fill: ${props => {
              if (props.children[0].props.depart === "police") {
                return "#1482ef";
              } else if (props.children[0].props.depart === "fire") {
                return "#F48065";
              } else if (props.children[0].props.depart === "admin") {
                return "#13C383";
              }
            }};
          }
        }
      }
    }

    &.selected {
      color: ${props => {
        if (props.children[0].props.depart === "police") {
          return "#1482ef";
        } else if (props.children[0].props.depart === "fire") {
          return "#F48065";
        } else if (props.children[0].props.depart === "admin") {
          return "#13C383";
        }
      }};
      background-color: #fff;
      div {
        svg {
          path {
            fill: ${props => {
              if (props.children[0].props.depart === "police") {
                return "#1482ef";
              } else if (props.children[0].props.depart === "fire") {
                return "#F48065";
              } else if (props.children[0].props.depart === "admin") {
                return "#13C383";
              }
            }};
          }
        }
      }
    }
  }
`;

const NavList = styled.div`
  position: absolute;
`;

export default MenuList;
