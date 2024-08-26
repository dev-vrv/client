
import { Button } from "@/components/ui/button"
import { ThemeToggler } from "@/components/admin/actions/ThemeToggler"

export default function Actions() {
	return (
		<ul className="list list-horizontal">
			<li>
				<ThemeToggler />
			</li>

		</ul>
	);
}

