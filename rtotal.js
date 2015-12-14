var total = parseFloat(/[\d,\.]+/.exec($($(".cA-ada-currentBalanceValue")[0]).text())[0].replace(",",""));
var q = $(".purchase .cT-bodyTableColumn2 .cT-line1");
for (i = 0; i < q.length; i++)
{
	var cell = $(q[i]).parent().parent().find(".cM-numberCell");
	var value = parseFloat(/[\d,\.]+/.exec(cell.text())[0].replace(",",""));
	cell.text(cell.text() + " ($" + total.toFixed(2) + ")");
	if (cell.text().startsWith("("))
	{
	    total += value;
	}
	else
	{
	    total -= value;
	}
}
