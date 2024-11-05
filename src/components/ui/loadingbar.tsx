import './loadingbar.css';
const LoadingBar = () => {
    return (
        <div className='container'>
            <div id='loader'>
                <div id='title' className='flex'>
                    <p className='loading-text'>LOADING</p>
                    <div className='therefore'>∴</div>
                    <p className='loading-number'>%</p>
                </div>
                <div id='loading-bar-border'>
                    <div className='loading-bar'></div>
                </div>
                <div id='warning'>
                    <div className='exclamation'>!</div>
                    <p> &nbsp CAUTION, Do not turn off.</p>
                    <div id='line-cascates'></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingBar;
