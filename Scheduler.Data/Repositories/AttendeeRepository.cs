using Scheduler.Data.Abstract;
using Scheduler.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scheduler.Data.Repositories
{
    public class AttendeeRepository : EntityBaseRepository<Attendee>, IAttendeeRepository
    {
        public AttendeeRepository(SchedulerContext context)
            : base(context)
        { }
    }
}
