import Modal from "./UI/Modal";

import Button from "./UI/Button";
import { recordActions } from "../store";
import { useDispatch } from "react-redux";

export default function ResetModal({ isOpen, onClose }) {
  const dispatch = useDispatch();

  function handleConfirmReset(){
    dispatch(recordActions.resetRecordList());
    onClose();
  }

	return (
		<Modal className="max-w-[92vw] min-40" isOpen={isOpen} onClose={onClose}>
			<p>Do you want to delete all of your data?</p>
			<div className="flex gap-3 mt-2">
				<Button
					onClick={handleConfirmReset}
					className="px-2 py-0.5 bg-red-500 text-white"
				>
					Yes
				</Button>
				<Button
					onClick={onClose}
					className="px-2 py-0.5 bg-primary text-white"
				>
					No
				</Button>
			</div>
		</Modal>
	);
}
