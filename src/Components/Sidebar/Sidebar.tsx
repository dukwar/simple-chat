import React from "react";
import classNames from "classnames";

export const Sidebar = ({ sidebarIsOpen, handleExpand, handleBlurSidebar, mobileSidebar, isOpenMobile, name, avatar, isAuth }:any) => {

    const classesSidebar = classNames(
        'Sidebar',
        {'closed': !sidebarIsOpen},
        {'mobile': mobileSidebar},
        {'mobile--open': isOpenMobile}
    )

    const renderDrawer = () => (
        <div className="Sidebar-outer-wrapper">
            <div
                tabIndex={1}
                className={classesSidebar}
                onBlur={handleBlurSidebar}
            >
                <div className="Sidebar-divider divider--right" />
                <div className="Sidebar-wrapper">
                    <div className="Sidebar__logo nav-link-reset">
                        <img
                            className="Sidebar__logo-image"
                            src={
                                sidebarIsOpen
                                    ? require("./assets/logo-short.svg").default
                                    : require("./assets/logo-short.svg").default
                            }
                            alt="logo"
                        />
                    </div>
                    <div className="Sidebar-divider" />
                    {localStorage.token && (
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--premium">
                                {/*<img*/}
                                {/*    className="Sidebar__icon margin--no"*/}
                                {/*    src={require("./assets/").default}*/}
                                {/*    alt="premium"*/}
                                {/*/>*/}
                                <p className="Sidebar__navigation-title item--text text--premium">
                                    На премиум
                                </p>
                            </li>
                        </div>
                    )}
                    <ul className="Sidebar__account-list">
                        <div className="nav-link-reset">
                            <li className="Sidebar__account-item item--fixed">
                                <audio src={avatar}/>
                                <img
                                    className="Sidebar__icon account-image"
                                    src={avatar ? avatar : require("./assets/anonymous.svg").default}
                                    alt="account"
                                />
                                <p className="Sidebar__account-name item--text"> {name ? name : 'Тайный шпион'}</p>
                            </li>
                        </div>
                    </ul>
                    <div className="Sidebar-divider" />
                    <ul className="Sidebar__navigation-list">
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--hover">
                                <img
                                    className="Sidebar__icon margin--no"
                                    src={require("./assets/course.svg").default}
                                    alt="course"
                                />
                                <p className="Sidebar__navigation-title item--text">Новости</p>
                            </li>
                        </div>
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--hover">
                                <img
                                    className="Sidebar__icon margin--no"
                                    src={require("./assets/play.svg").default}
                                    alt="play"
                                />
                                <p className="Sidebar__navigation-title item--text">Мессенджер</p>
                            </li>
                        </div>
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--hover">
                                <img
                                    className="Sidebar__icon margin--no"
                                    src={require("./assets/task.svg").default}
                                    alt="tasks"
                                />
                                <p className="Sidebar__navigation-title item--text">Друзья</p>
                            </li>
                        </div>
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--hover">
                                <img
                                    className="Sidebar__icon margin--no"
                                    src={require("./assets/progress.svg").default}
                                    alt="progress"
                                />
                                <p className="Sidebar__navigation-title item--text margin-b--no">
                                    Сообщества
                                </p>
                            </li>
                        </div>
                        <div className="nav-link-reset">
                            <li className="Sidebar__navigation-item item--wrapper item--hover">
                                <img
                                    className="Sidebar__icon margin--no"
                                    src={require("./assets/blog.svg").default}
                                    alt="blog"
                                />
                                <p className="Sidebar__navigation-title item--text">Фотографии</p>
                            </li>
                        </div>
                    </ul>
                    <div className="Sidebar__bottom-wrapper">
                        <div className="Sidebar-divider" />
                        <ul className="Sidebar__bottom-list">
                            <li
                                className="Sidebar__bottom-item item--wrapper item--hover"
                                onClick={handleExpand}
                            >
                                <div className="image-wrapper color--blue">
                                    <img
                                        className={`arrow--${!sidebarIsOpen}`}
                                        src={require("./assets/arrow.svg").default}
                                        alt="collapse/expand"
                                    />
                                </div>
                                <p className="item--text">Свернуть</p>
                            </li>
                            {isAuth && (
                                <li className="Sidebar__bottom-item item--wrapper item--hover">
                                    <div className="image-wrapper">
                                        <img
                                            src={require("./assets/logout.svg").default}
                                            alt="logout"
                                        />
                                    </div>
                                    <p className="item--text">Выйти</p>
                                </li>
                            )}
                        </ul>
                        {!isAuth && (
                            <ul className="Sidebar__sign-list item--wrapper">
                                <li className="Sidebar__bottom-item">
                                    <div className="image-wrapper">
                                        <img
                                            src={require("./assets/login.svg").default}
                                            alt="login"
                                            className="Sidebar__icon margin--no"
                                        />
                                    </div>
                                    <p className="item--text">Войти</p>
                                </li>
                                <li className="Sidebar__bottom-item">
                                    <div className="image-wrapper">
                                        <img
                                            src={require("./assets/signup.svg").default}
                                            alt="signup"
                                            className="Sidebar__icon margin--no"
                                        />
                                    </div>
                                    <p className="item--text">Регистрация</p>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return <>{renderDrawer()}</>;
};
