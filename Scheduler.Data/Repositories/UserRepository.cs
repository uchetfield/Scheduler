using Scheduler.Data.Abstract;
using Scheduler.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scheduler.Data.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(SchedulerContext context)
            : base(context)
        { }
    }
}
