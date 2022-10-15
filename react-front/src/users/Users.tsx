import UserItem from "./UserItem";
import { IUser } from "./Iterfaces";
import UserFilterForm from "./UserFilterForm"
import useFilter from "../hooks/useFilter"

interface UsersProps {
  users: IUser[];
  openModal: (id: number) => void
}

export default function ({ users,openModal}: UsersProps) {
    const {filterValue, updateFilter, filterState} = useFilter<IUser>(users, ['name'], '')
    

  return (
    <div className="users">
      <div className="container">
        <div className="users__inner">
          <UserFilterForm updateFilter={updateFilter}></UserFilterForm>
          <ul className="users__list">
            {filterState.map((user) => (
              <UserItem
              openModal={() => openModal(user.id)}
                key={user.id}
                email={user.email}
                phone={user.phone}
                title={user.name}
              ></UserItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
