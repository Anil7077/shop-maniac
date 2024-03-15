import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
    return (
        <>
            <div className='skeleton-box-div'>
                <Skeleton height={180} width={240} />
                <br />
                <Skeleton height={15} width={240} />
                <Skeleton height={15} width={240} />
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
                    <Skeleton height={15} width={110} />
                    <Skeleton height={15} width={110} />
                </div>
            </div>
        </>
    )
}

export default SkeletonLoader