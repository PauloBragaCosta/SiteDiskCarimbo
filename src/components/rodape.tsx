
import '../styles/components/rodape.css'

export default function Rodape() {
    return (
		<footer id="ac-globalfooter">
		<div id="ac-gf-content">
			<h2 id="ac-gf-label" >Rodapé do site</h2>

			<nav id="ac-gf-breadcrumbs" aria-label="Caminhos de Navegação" role="navigation">
				<a href="/br/" id="home ac-gf-breadcrumbs-home">
					<span id="ac-gf-breadcrumbs-home-icon" aria-hidden="true"></span>
					<span id="ac-gf-breadcrumbs-home-label">Apple</span>
					<span id="ac-gf-breadcrumbs-home-chevron"></span>
					<span id="ac-gf-breadcrumbs-home-mask"></span>
				</a>
				<div id="ac-gf-breadcrumbs-path">
					<ol id="ac-gf-breadcrumbs-list" vocab="http://schema.org/" typeof="BreadcrumbList">
						<li id="ac-gf-breadcrumbs-item" property="itemListElement" typeof="ListItem">
							<span property="name">iPad</span>
							<meta property="position" content="1"></meta>
						</li>
					</ol>
				</div>
			</nav>

			<section id="ac-gf-footer">


				<div id="ac-gf-footer-legal">
					<div id="ac-gf-footer-legal-copyright">Copyright ©

					2020
					Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35
			</div>
					<div id="ac-gf-footer-legal-links">
						<a id="ac-gf-footer-legal-link" href="/br/legal/privacy/"
							data-analytics-title="privacy policy">Política de Privacidade</a>
						<a id="ac-gf-footer-legal-link" href="/br/shop/goto/help/sales_refunds"
							data-analytics-title="sales and refunds">Política de vendas</a>
						<a id="ac-gf-footer-legal-link" href="/br/legal/" data-analytics-title="legal">Avisos
					legais</a>
						<a id="ac-gf-footer-legal-link" href="/br/sitemap/" data-analytics-title="site map">Mapa do
					site</a>
					</div>
				</div>
			</section>


		</div>
	</footer>

    );
}