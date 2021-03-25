export function determineMeanAndStddev(data) {
  const dataMean = data.mean(0);
  // TODO(bileschi): Simplify when and if tf.var / tf.std added to the API.
  const diffFromMean = data.sub(dataMean);
  const squaredDiffFromMean = diffFromMean.square();
  const variance = squaredDiffFromMean.mean(0);
  const dataStd = variance.sqrt();
  return {dataMean, dataStd};
}


export function normalizeTensor(data, dataMean, dataStd) {
  return data.sub(dataMean).div(dataStd);
}

