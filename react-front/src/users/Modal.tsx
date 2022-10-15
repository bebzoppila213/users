import { IUser } from "./Iterfaces"

interface ModalPRops{
    modalIsOpen: boolean,
    modalState: IUser,
    closeModal: () => void

}

export default function({modalIsOpen, modalState, closeModal}:ModalPRops){

    return(
        <div onClick={() => closeModal()} className={"modal" +  (modalIsOpen ? " modal--open" : '')}>
        <div onClick={event => event.stopPropagation()} className="modal__inner">
            <div onClick={() => closeModal()} role="button" className="modal__bitton">X</div>
            <div className="modal__content">
                <h2 id="modal_name" className="modal__title">{modalState.name}</h2>
                <div className="modal__info">
                    <div className="modal__info-item">
                        <div className="modal__info-name">Телефон:</div>
                        <div className="modal__info-text">
                            <a id="modal_phone" className="modal__info-link text-underline" href={"tel:" + modalState.phone}>{modalState.phone}</a>
                        </div>
                    </div>
                    <div className="modal__info-item">
                        <div className="modal__info-name">Почта:</div>
                        <div className="modal__info-text">
                            <a id="modal_email" className="modal__info-link text-underline" href={"mailto:" + modalState.email}>{modalState.email}</a>
                        </div>
                    </div>
                    <div className="modal__info-item">
                        <div className="modal__info-name">Дата приёма:</div>
                        <div id="modal_hire_date" className="modal__info-text">
                            {modalState.hire_date}
                        </div>
                    </div>
                    <div className="modal__info-item">
                        <div className="modal__info-name">Должность:</div>
                        <div className="modal__info-text"><span id="modal_position_name">{modalState.position_name.slice(0, 29)}</span>...</div>
                    </div>
                    <div className="modal__info-item">
                        <div className="modal__info-name">Подразделение:</div>
                        <div className="modal__info-text">
                            <span id="modal_department">{modalState.department.slice(0, 29)}</span>...
                        </div>
                    </div>
                </div>
                <div className="modal__footer">
                    <h4 className="modal__footer-title">Дополнительная информация</h4>
                    <p className="modal__footer-text">
                        Разработчики используют тектс LoremImpsul в качестве заполнителя макета страницы. Так как дополнительной информации в Json нет,а адресс нигде не используется закинул его сюда
                        <span id="modal_address" className="modal__footer-adress">{modalState.address}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}