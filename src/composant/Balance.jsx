import React ,{useEffect,useState}from 'react';

export default function Balance({balance}) {
    const [currentBalance, setCurrentBalance] = useState(0);
    useEffect(() => {
       setCurrentBalance(balance)
    }, [balance]);
    return (
        <div className={`bg-white ${currentBalance>=0?'border-success': 'border-danger'} border  text-center`}>
            <p className='lead mt-3'>
                <span className='fw-blod me-2' >
                    Balance
                    </span>
                    <span className={`badge ${currentBalance>=0 ?'bg-success': 'bg-danger'}`}>
                        ${currentBalance}
                    </span>
            </p>
        </div>
    );
}


