
// Em construção



import '../styles/components/list.css';


export default function List() {
    return (
        <nav aria-label="iPad family of products" id="chapternav" itemID="chapternav with-paddles" data-analytics-region="family browser">
		<div id="chapternav-wrapper">
			<ul id="chapternav-items">
				<li id="chapternav-item-ipad-pro">
					<a id="chapternav-link" href="/ipad-pro/" data-analytics-title="ipad pro">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">iPad Pro</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-ipad-air">
					<a id="chapternav-link" href="/ipad-air/" data-analytics-title="ipad air">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">iPad Air</span>
						<span id="chapternav-new">New</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-ipad">
					<a id="chapternav-link" href="/ipad-10.2/" data-analytics-title="ipad">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">iPad</span>
						<span id="chapternav-new">New</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-ipad-mini">
					<a id="chapternav-link" href="/ipad-mini/" data-analytics-title="ipad mini">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">iPad&nbsp;mini</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-compare">
					<a aria-label="Compare iPad models" id="chapternav-link" href="/ipad/compare/" data-analytics-title="compare">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">Compare</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-apple-pencil">
					<a id="chapternav-link" href="/apple-pencil/" data-analytics-title="apple pencil">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">Apple Pencil</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-keyboard">
					<a id="chapternav-link" href="/ipad-keyboards/" data-analytics-title="keyboards">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">Keyboards</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-airpods">
					<a id="chapternav-link" href="/airpods/" data-analytics-title="airpods">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">AirPods</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-accessories">
					<a aria-label="Shop iPad Accessories" id="chapternav-link" href="/us/shop/goto/ipad/accessories" data-analytics-title="accessories">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">Accessories</span>
					</a>
				</li>
				<li id="chapternav-item chapternav-item-ipados">
					<a id="chapternav-link" href="/ipados/" data-analytics-title="ipados">
						<figure id="chapternav-icon"></figure>
						<span id="chapternav-label">iPadOS</span>
					</a>
				</li>
			</ul>
			<div id="chapternav-paddles">
				<button id="chapternav-paddle chapternav-paddle-left" aria-hidden="true"></button>
				<button id="chapternav-paddle chapternav-paddle-right" aria-hidden="true"></button>
			</div>
		</div>
	</nav>
    );
}