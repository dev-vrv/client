import Sidebar from "@/components/admin/sidebar/Sidebar";
import Actions from "@/components/admin/actions/Actions";

export default function Admin() {
	return (
		<div className="d-flex h-100 w-100 p-3">
			<Sidebar />

			<div className="flex-grow-1">
				<div className="d-flex justify-content-end align-items-center">
					<Actions />
				</div>
			</div>
		</div>
	);
}
