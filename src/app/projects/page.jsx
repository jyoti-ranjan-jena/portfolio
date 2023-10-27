import Link from 'next/link'
import React from 'react'

const Page = () => {
    const projects = [
        {name: "BlogApp"},
        {name: "FitnessApp"},
        {name: "App3"},
        {name: "App4"},
    ]
  return (
    <div className='flex flex-col space-y-6 items-center justify-center'>
        {projects.map(
            (project, index) => {
                return (
                    <div key={index} className="card w-[70%] h-[10rem] bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{project.name}</h2>
                            <p>Project Desc!!</p>
                            <div className="card-actions justify-end">
                            <Link href={`/projects/${project.name}`} className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        )}
    </div>
  )
}

export default Page