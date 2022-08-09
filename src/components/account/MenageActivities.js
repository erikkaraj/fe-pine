import { useEffect, useState } from "react";
import { getActivityByUser } from "../../core/Activity";
import ActivityCard from "../cards/ActivityCard";
import NewActivityCard from "../cards/NewActivityCard";

export default function MenageActivities({ user }) {
  const [myActivities, setMyActivities] = useState([]);

  useEffect(() => {
    if (user?.id) {
      getActivityByUser({ userId: user.id }).then((res) =>
        setMyActivities(res)
      );
    }
  }, [user]);

  return (
    <div className="flex w-10/12 flex-col">
      <div className="flex flex-wrap space-x-4 space-y-2 h-full md:h-screen overflow-y-scroll">
        {myActivities.map((activity) => (
          <ActivityCard activity={activity} key={Math.random() * 100} />
        ))}
        <NewActivityCard />
      </div>
    </div>
  );
}
