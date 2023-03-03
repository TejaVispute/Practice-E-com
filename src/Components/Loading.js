import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function Loading({ data }) {
    return (
        <div className='mt-5' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "1rem" }}>
            <div>
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
            <div >
                <Skeleton height={370} />
            </div>
        </div>
    )
}

export default Loading;