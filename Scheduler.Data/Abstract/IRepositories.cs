using Scheduler.Model;
using Scheduler.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Scheduler.Data.Abstract
{
    public interface IScheduleRepository : IEntityBaseRepository<Schedule> { }

    public interface IUserRepository : IEntityBaseRepository<User> { }

    public interface IAttendeeRepository : IEntityBaseRepository<Attendee> { }
}
