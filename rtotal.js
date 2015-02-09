var total = parseFloat(/[\d,\.]+/.exec($(($(".cT-valueItem")[0])).text())[0].replace(",",""));
var q = $(".cT-bodyTableColumn2 .cT-line1");
for (i = 0; i < q.length; i++)
{
	if ($(q[i]).text().startsWith("*Pending")) continue;
	var cell = $(q[i]).parent().parent().find(".cM-numberCell");
	var value = parseFloat(/[\d,\.]+/.exec(cell.text())[0].replace(",",""));
	cell.text(cell.text() + " (" + total + ")");
	total -= value;
}
