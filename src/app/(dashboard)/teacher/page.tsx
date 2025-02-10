import Announcements from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className='text-xl font-semibold'>Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        <Announcements />
      </div>
    </div>
  )
}

export default TeacherPage