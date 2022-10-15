
interface UserItemProps{
    title: string,
    phone: string,
    email: string,
    openModal: () => void
}


export default function ({title, phone, email, openModal}:UserItemProps) {
  return (
    <li onClick={() => openModal()} className="users__item">
      <h3 className="users__item-title">{title}</h3>
      <div className="users__item-info">
        {" "}
        <img
          className="users__item-icon"
          src="./images/phone.svg"
          alt="Телефон"
        />
        <a className="users__item-link " href={"tel:" + phone}>
          {phone}
        </a>
      </div>
      <div className="users__item-info">
        <img
          className="users__item-icon"
          src="./images/email.svg"
          alt="Почта"
        />
        <a
          className="users__item-link users__item-link--underline"
          href={"mailto:" + email}
        >
          {email}
        </a>
      </div>
    </li>
  );
}
