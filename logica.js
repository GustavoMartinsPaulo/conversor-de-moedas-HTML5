	function callBack() {
		var oResponse = this;
		var sResponseBody = oResponse.responseText;
		var oJSON = JSON.parse(sResponseBody);
		var sReais = oJSON.rates.BRL;
		var oUrl = new URL(location.href);
		var sValorOrigem = oUrl.searchParams.get("valor_origem");
		var sValorConvertido = sValorOrigem * sReais;

		document.querySelector("#valor_destino").value = sValorConvertido;
	}

	function chamaAPI() {
		const sUrl = "https://api.exchangeratesapi.io/latest";
		var oRequest = new XMLHttpRequest();

		oRequest.addEventListener("load", callBack);
		oRequest.open("GET", sUrl);
		oRequest.send();
	}