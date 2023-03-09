function TabItem ({ title, active, setActive, imgSrc, type}) {
    const className = active ? 'tab-btn-active' : 'tab-btn-not-active';

    return (
        <div className="tab-item">
            <button onClick={() => setActive(title)} className="tab-item-btn">
                {type !=="cart" && <img src={imgSrc} alt={title} className={`tab-btn-img ${active && `tab-btn-img-active`}`}/>}
                <span className={`tab-btn-text ${className}`}>
                    {title}
                </span>
            </button>
        </div>
    )
}

export default TabItem