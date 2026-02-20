/** Style */
import "../css/UserItemSkeleton.css";

const UserItemSkeleton = () => {
    return (
        <div className="skeleton-user-container">
            <div className="skeleton-user-card">
                <div className="skeleton-user-card-header">
                    <div className="skeleton-user-profile-img"></div>
                    <div className="skeleton-username-badge"></div>
                </div>

                <div className="skeleton-user-card-body">
                    <div className="skeleton-name"></div>
                    <div className="skeleton-company"></div>

                    <div className="skeleton-stats">
                        <div className="skeleton-stat-item">
                            <div className="skeleton-street"></div>
                            <div className="skeleton-city"></div>
                        </div>
                    </div>

                    <div className="skeleton-social-links">
                        <div className="skeleton-social-btn"></div>
                        <div className="skeleton-social-btn"></div>
                        <div className="skeleton-social-btn"></div>
                    </div>

                    <div className="skeleton-user-btn">
                        <div className="skeleton-follow-btn"></div>
                        <div className='skeleton-follow-btn'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItemSkeleton;
