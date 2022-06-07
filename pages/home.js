import { TrashSimple, CheckCircle, Plus } from 'phosphor-react'
import { useState } from 'react'
import ModalAddTask from '../src/components/ModalAddTask'

const features = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        id: 2,
        name: 'No hidden fees',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        id:3,
        name: 'Transfers are instant',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        id: 4,
        name: 'Mobile notifications',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
]

const Home = () => {
    const [tasks, setTasks] = useState(features)
    const [openTaskModal, setOpenTaskModal] = useState(false)
    const handleDeleteTask = (id) => {
        features = features.filter( feature => feature.id != id)
        setTasks(features)
    }
    const handleNewTask = (newTask) => {
        features = features.concat([newTask])
        setTasks(features)
    }
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Tasks</h1>
                    </div>
                    <div className="mt-10">
                    <div className='flex w-100 justify-end'>
                        <button onClick={() => setOpenTaskModal(true)} className='p-2 bg-orange-600 rounded-lg text-white my-4 hover:bg-orange-500'>
                            <span className='flex gap-2 items-center justify-center'>
                                Add task
                                <Plus size={20}/>
                            </span>
                        </button>
                    </div>
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {tasks.map((feature) => (
                        <div key={feature.name} className="relative bg-zinc-800 rounded-lg p-2">
                            <dt>
                                <p className="ml-16 text-lg leading-6 font-medium text-orange-600">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            <div className='flex justify-end w-full'>
                                <div className='flex gap-2'>
                                    <TrashSimple size={28} className="text-red-500" onClick={() => handleDeleteTask(feature.id)}/>
                                    <CheckCircle size={28} className="text-green-600" onClick={() => handleDeleteTask(feature.id)} />
                                </div>                    
                            </div>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
            <ModalAddTask open={openTaskModal} setOpen={setOpenTaskModal} handleNewTask={handleNewTask} />
        </div>
    )
}

export default Home