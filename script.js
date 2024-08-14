const conversionFactors = {
    pm: 1,
    nm: 1e3,
    um: 1e6,
    mm: 1e9,
    m: 1e12,
    km: 1e15
};

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    
    if (isNaN(inputValue)) {
        clearResults();
        return;
    }

    const valueInPm = inputValue * conversionFactors[inputUnit];
    
    document.getElementById('outputPm').value = valueInPm;
    document.getElementById('outputNm').value = valueInPm / conversionFactors['nm'];
    document.getElementById('outputUm').value = valueInPm / conversionFactors['um'];
    document.getElementById('outputMm').value = valueInPm / conversionFactors['mm'];
    document.getElementById('outputM').value = valueInPm / conversionFactors['m'];
    document.getElementById('outputKm').value = valueInPm / conversionFactors['km'];
}

function clearResults() {
    document.getElementById('outputPm').value = '';
    document.getElementById('outputNm').value = '';
    document.getElementById('outputUm').value = '';
    document.getElementById('outputMm').value = '';
    document.getElementById('outputM').value = '';
    document.getElementById('outputKm').value = '';
}
