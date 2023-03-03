function TabItem ({ title, index, active, setActive}) {
    const className = active ? 'tab-btn-active' : 'tab-btn-not-active';

    return (
        <div className="tab-item">
            <button onClick={() => setActive(title)} className="tab-item-btn">
                <span className={`tab-btn-text ${className}`}>
                    {title}
                </span>
            </button>
        </div>
    )
}

export default TabItem